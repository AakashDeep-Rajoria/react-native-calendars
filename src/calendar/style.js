import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';
export default function getStyle(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        container: {
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: appStyle.calendarBackground
        },
        dayContainer: {
            flex: 1,
            alignItems: 'center'
        },
        emptyDayContainer: {
            flex: 1
        },
        monthView: {
            backgroundColor: appStyle.calendarBackground,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#484848",
            backgroundColor: "#252525"
        },
        week: {
            // marginVertical: appStyle.weekVerticalMargin,
            flexDirection: 'row',
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#484848",
            justifyContent: 'center',
            alignitem: "center"
        },
        // @ts-expect-error
        ...(theme['stylesheet.calendar.main'] || {})
    });
}
