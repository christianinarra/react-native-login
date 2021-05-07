import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import * as api from "../../services/booking";
import Moment from 'moment';
import NumberFormat from 'react-number-format';

function useBookings() {
    const [bookings, setBookings] = useState([]);

    const doFetchData = async () => {
        const response = await api.bookingList();            
        setBookings(response);
    };

    useEffect(() => {
        doFetchData();
    });
    return bookings;
}

function price(e){
    z = e.toString()
    zf = z.split(".")[0] 
    zs = z.split(".")[1]
    if (!zs) zs = "00" 
    if (zs.length == 1) {
        return [zf,zs].join(",") + "0"
    } else {
        return [zf,zs].join(",")
    }
}

export default function Home(props) {
    const bookings = useBookings();

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={styles.title}>{`Booking App`}</Text>

            <ScrollView>                
                {bookings.map((booking) => {
                return (
                    <ListItem
                    key={booking.bookingId}
                    style={styles.item}                 
                    >                  
                    <ListItem.Content>                        
                        <ListItem.Subtitle>#{booking.bookingId}</ListItem.Subtitle>
                        <ListItem.Title>{booking.firstName} {booking.lastName}</ListItem.Title>
                        <ListItem.Subtitle>{booking.streetAddress}</ListItem.Subtitle>                        
                        <ListItem.Subtitle>Price: ${price(booking.bookingPrice)}</ListItem.Subtitle>
                        <ListItem.Subtitle>Date: {Moment(booking.bookingTime).format('d MMM Y')}</ListItem.Subtitle>
                    </ListItem.Content>
                    </ListItem>
                );
                })}
            </ScrollView>                     
        </View>    
    );  
}

const styles = StyleSheet.create({
    title: {
      marginTop: 10,
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center'
    },
    item: {
        marginBottom: 10,
        backgroundColor: '#362068',
        padding: 5
    }
});