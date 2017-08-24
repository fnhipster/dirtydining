import { createNetworkInterface, ApolloClient } from 'react-apollo'
import { ENDPOINT_GRAPHQL } from './endpoints'

const networkInterface = createNetworkInterface({ uri: ENDPOINT_GRAPHQL })
export default new ApolloClient({ networkInterface })