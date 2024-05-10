import SelectDropdown from "react-native-select-dropdown";
import { View, Text, StyleSheet } from "react-native";

interface DropDownProps {
  list: string[];
  title: string;
  isIndex: boolean;
  setSelectedItem: (item: string | number) => void;
}

export const DropDown = ({ list, title, isIndex, setSelectedItem }) => {
  return (
    <SelectDropdown
      data={list}
      onSelect={(selectedItem, index) => {
        isIndex ? setSelectedItem(index + 1) : setSelectedItem(selectedItem);
      }}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View style={styles.dropdownButtonStyle}>
            <Text
              style={[
                styles.dropdownButtonTxtStyle,
                !selectedItem && styles.placeholder,
              ]}
            >
              {selectedItem ? selectedItem : "Select an option"}
            </Text>
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#D2D9DF" }),
            }}
          >
            <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: "100%",
    height: 40,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    // backgroundColor: "#E9ECEF",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    color: "#000",
  },
  placeholder: {
    color: "#BCBCBE",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
