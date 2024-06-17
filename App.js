import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Avatar, List } from 'react-native-paper';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    message: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
    icon: 'check-circle'
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    message: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
    icon: 'account-group'
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    message: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
    icon: 'account-group'
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    message: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
    icon: 'account-group'
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    message: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle'
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    message: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle'
  },
];

export default function App() {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Avatar.Icon size={40} icon={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Thông báo</Text>
      <Text style={styles.border}></Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  border: {
    borderBottomWidth: 1,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderTopColor: '#ddd',
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  messageText: {
    fontSize: 14,
    color: '#555',
  },
  dateText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});
