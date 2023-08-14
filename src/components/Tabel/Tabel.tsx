import { StyleProp, ScrollView,StyleSheet, Text, View, ViewStyle } from "react-native";
import props from "./Tabel.types";
import { useTheme } from "../../Hooks";

export default function Table({ header, data, containerStyle, TableNumbering }: props) {
    const theme = useTheme()


    return (
        <ScrollView horizontal style={[containerStyle]} showsHorizontalScrollIndicator={false} >
            <View style={{ flexDirection: "row", backgroundColor: "white", elevation: 5, borderRadius: 10, overflow: "hidden", marginHorizontal: 10, marginVertical: 10 }}>
                {
                    TableNumbering && <View >
                        <View style={[styles.headerContainer, {
                            backgroundColor :theme.colors.primary
                        }]}>
                            <Text style={styles.headerText}>No</Text>
                        </View>

                        {
                            data.map((el, ind) => <View key={"No-table-"+ind} style={styles.cellText}>
                                <Text style={{ textAlign: "right", fontWeight: "bold" }}>{ind + 1}</Text>
                            </View>)
                        }
                    </View>
                }



                {
                    header.map((el, ind) => (
                        <View key={"Table-Item-"+ind}>
                            <View style={[styles.headerContainer, {
                            backgroundColor :theme.colors.primary
                        }]} >
                                <Text style={{ color: "white", fontWeight: "bold" }}>{el || ""}</Text>
                            </View>
                            {
                                data.map((el, ind2) => <View key={"Table-"+ind+"-item-"+ind2} style={{ paddingVertical: 5, paddingHorizontal: 10, borderBottomWidth: 2, borderBottomColor: "white" }}>
                                    <Text style={{ textAlign: typeof el[ind] == "number" ? "right" : "center" }}>{el?.[ind]}</Text>
                                </View>)
                            }
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer: { paddingVertical: 10, paddingHorizontal: 10, },
    headerText : { color: "white", fontWeight: "bold" },
    cellText : {paddingVertical: 5, paddingHorizontal: 10, borderBottomWidth: 2, borderBottomColor: "white" }
})