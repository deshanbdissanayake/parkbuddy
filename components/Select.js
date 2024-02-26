import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../assets/data/color";
import {Picker} from '@react-native-picker/picker';

const Select = ({val, func, items = [{label: 'No items', value: ''}]}) => {

  
    return (
    <View style={styles.selectStyles}>
        <Picker
            selectedValue={val}
            onValueChange={(itemValue, itemIndex) =>
                func(itemValue)
            }>
            { items.map((val, i)=>(
                <Picker.Item key={i} label={val.label} value={val.value} />
            ))}
        </Picker>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
    selectStyles: {
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: colors.borderColor,
        marginBottom: 15,
    },
});