import PropTypes from 'prop-types';
import React from 'react';
import { Button, View } from 'react-native';

import styles from './styles';

const SearchButton = ({ onPress }) => (
            <View style={styles.container}>
                <Button
                    onPress={onPress}
                    title="Search"
                />
            </View>
);

SearchButton.propTypes = {
    onPress: PropTypes.func,
};

export default SearchButton;