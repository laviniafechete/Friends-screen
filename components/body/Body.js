import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import TableHeader from './TableHeader';
import Player from './Player';

import players from './players.json'

class Body extends Component {
    render() {
        return (
            <View style={styles.bodyContainer}>
                <TableHeader />
                <FlatList
                    data={players}
                    renderItem={({ item, index }) =>
                        <Player
                            key={index}
                            index={index}
                            data={item.player}
                        />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
    }
})

export default Body;