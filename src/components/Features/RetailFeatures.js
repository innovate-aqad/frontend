import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import {Card, IconButton} from 'react-native-paper';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import {blue, flexTradButtonColor, grayColor, white} from '../../constants/Theme';

export default function RetailerFeatures() {
  const [openCards, setOpenCards] = useState({});

  useEffect(() => {
    console.log('State updated:', openCards);
  }, [openCards]);

  const data = [
    {
      id: '1',
      content:
        "AQAD's platform ensures timely payments through streamlined invoicing and payment processing, enhancing cash flow for vendors.",
      heading: 'Effortless inventory management',
    },
    {
      id: '2',
      content:
        "AQAD's platform ensures timely payments through streamlined invoicing and payment processing, enhancing cash flow for vendors.",
      heading: 'Beat the price war',
    },
    {
      id: '3',
      content:
        'With access to a logistics network, vendors can improve delivery reliability and consistency, enhancing their reputation.',
      heading: 'Reduce employee turnover',
    },
    {
      id: '5',
      content:
        'Vendors gain access to market insights and retailer demand data, allowing for more accurate sales forecasting and inventory production.',
      heading: 'Express wholesales deliveries',
    },
    {
      id: '6',
      content:
        "The platform's financial tools offer more predictable payment schedules, reducing the strain of extended credit cycles.",
      heading: 'Seasonal fluctuations? No problem',
    },
    {
      id: '7',
      content:
        'AQAD provides targeted visibility to vendors within the B2B marketplace, reducing the need for extensive marketing budgets with higher ROI.',
      heading: 'Complete with e-commerce giants',
    },
    {
      id: '8',
      content:
        'By optimizing delivery routes and consolidating shipments, AQAD lowers logistical costs, benefiting from economies of scale.',
      heading: 'Free up your staff',
    },
    {
      id: '9',
      content:
        'By optimizing delivery routes and consolidating shipments, AQAD lowers logistical costs, benefiting from economies of scale.',
      heading: 'Optimize bulk deals',
    },
    {
      id: '10',
      content:
        'By optimizing delivery routes and consolidating shipments, AQAD lowers logistical costs, benefiting from economies of scale.',
      heading: 'Focus on growth, not finances',
    },
    {
      id: '11',
      content:
        'By optimizing delivery routes and consolidating shipments, AQAD lowers logistical costs, benefiting from economies of scale.',
      heading: 'Elliminate excess inventory',
    },
  ];

  const toggleCard = id => {
    console.log('Toggling card id:', id);
    setOpenCards(prevState => {
      const newState = {
        ...prevState,
        [id]: !prevState[id],
      };
      console.log('New state after toggle:', newState);
      return newState;
    });
  };

  const renderItem = ({item}) => {
    const isOpen = openCards[item.id];
    return (
      <View key={item.id}>
        <Card style={styles.card}>
          <Card.Content className="py-0 pr-2">
            <View style={styles.header}>
              <Text
                style={{
                  fontFamily: POPPINS.PoppinsMedium,
                  color: isOpen ? blue : flexTradButtonColor,
                  fontSize: 13,
                }}>
                {item.heading}
              </Text>
              <IconButton
                icon={isOpen ? 'chevron-up' : 'chevron-down'}
                size={24}
                className="relative right-[-12px]"
                iconColor={flexTradButtonColor}
                onPress={() => toggleCard(item.id)}
              />
            </View>
            {isOpen && (
              <View className="mb-3">
                <Text style={styles.content}>{item.content}</Text>
              </View>
            )}
          </Card.Content>
        </Card>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 0,
    marginTop: 5,
    backgroundColor: white,
    shadowColor: white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: blue,
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  content: {
    marginTop: -10,
    color: grayColor,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
});
