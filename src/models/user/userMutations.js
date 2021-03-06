/**
 * Created by danstan on 5/9/17.
 */
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import userType from './userType';
import user from './userSchema';

export default {
    addUser:{
        type:userType,
        args: {
            name:{
                name:'name',
                type:new GraphQLNonNull(GraphQLString)
            },
            email:{
                name:'email',
                type: new GraphQLNonNull(GraphQLString)
            },
            tel: {
                name:'tel',
                type: new GraphQLNonNull(GraphQLString)
            },
            address: {
                name:'address',
                type: new GraphQLNonNull(GraphQLString)
            },
            age: {
                name:'age',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: user.addUser
    },
    updateUser:{
        type:userType,
        args: {
            id:{
                type: GraphQLID
            },
            name:{
                name:'name',
                type:new GraphQLNonNull(GraphQLString)
            },
            email:{
                name:'email',
                type: new GraphQLNonNull(GraphQLString)
            },
            tel: {
                name:'tel',
                type: new GraphQLNonNull(GraphQLString)
            },
            address: {
                name:'address',
                type: new GraphQLNonNull(GraphQLString)
            },
            age: {
                name:'age',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: user.updateUser
    }
};
