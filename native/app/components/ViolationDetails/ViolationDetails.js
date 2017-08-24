import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { Image, Text } from 'react-native'

import { Dialog } from '../Dialog'

import { QUERY_GET_RESTAURANT } from '../../config/queries'

import styles from './styles'

import images from '../../config/images'

const ViolationDetails = ({ data: { restaurant, loading, error }, onClose }) => {
  
  if ( loading ) return null
  
  else if (error) return(
    <Dialog title="I made a boo-boo" onClose={onClose}>
      <Text>There was an issue getting the information. Please try again.</Text>
    </Dialog>
  )

  else return (
    <Dialog
      title={restaurant.business_name}
      onClose={onClose}
    >
      <Image style={styles.imageCategory} source={images.categoryTest} />
    </Dialog>
  )

}


ViolationDetails.propTypes = {
  data: PropTypes.shape({
    restaurant: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
  }),
  onClose: PropTypes.func
}

export default graphql(QUERY_GET_RESTAURANT, {
  options: ({ id }) => ({
    variables: { id }
  })
})(ViolationDetails)
