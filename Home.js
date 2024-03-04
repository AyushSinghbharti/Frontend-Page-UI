import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeadingBar from './components/HeadingBar';
import SearchComp from './components/SearchComp';
import JobOptions from './components/JobOptions';
import Footer from './components/Footer';

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.heading}>
            <HeadingBar />
        </View>
        <View style={styles.searchBar}>
            <SearchComp />
        </View>
        <View style={styles.jobOption}>
            <JobOptions />
        </View>
        <View style={styles.jobFinal}>
            <Footer />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {

    },
    searchBar: {

    },
    jobOption: {

    },
    jobCards: {

    },
    jobFinalCard: {

    }

})

export default Home