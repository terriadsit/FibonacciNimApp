import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={[{ flexDirection: 'row' }, styles.bar]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabContainer}
          >
            <View style={styles.tab}>
              <Text style={[{ color: isFocused ? '#cde1f7' : 'white' }, styles.tabText]}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    bar: {
     margin: 20 
    },
    tab: {
        height: 60,
        width: 100,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        paddingBottom: 0,
        backgroundColor: '#5C5565',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
        //shadowOffset: { width: 1, height: 1 },  // how much down and right shadow is
        //shadowColor: '#333',
        //shadowOpacity: 0.3,
        //shadowRadius: 2,
        //elevation: 3,
    },
    tabContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    tabText: {
     // fontFamily: 'Gothic',
      //justifyContent: 'center',
     
      //paddingTop: 10
    }
})




