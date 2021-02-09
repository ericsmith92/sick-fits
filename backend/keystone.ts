import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import { User } from './schemas/User';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';

const databseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360, //how long should they stay signed in?
    secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
        //TODO: Add in initial roles
    }

});

export default withAuth(config({
    server:{
        cors:{
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        }
    },
    db:{
        adapter: 'mongoose',
        url: databseURL,
        onConnect: async (keystone) => {
           console.log('connected to db'); 
           if(process.argv.includes('--seed-data')){
                await insertSeedData(keystone);
           }
        }
    },
    lists: createSchema({
        //Schema items go in here
        User,
        Product,
        ProductImage
    }),
    ui:{
        //show UI only for people that meet this criteria
        isAccessAllowed: ({ session }) => {
            //console.log(session);
            return !!session?.data;
        }
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id`
    })
}));

