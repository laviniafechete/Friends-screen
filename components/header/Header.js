import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Top from './Top';
import Banner from './Banner';

class Header extends Component {

    render() {
        return (
            <View style={styles.headerContainer}>
                <Top />
                <Banner />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        //flex: 1,
    }
})

export default Header;