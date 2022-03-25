import { data } from 'data'

export const getScheduleList = (day) => {
	const hours = [8, 9, 10, 11, 12]
	const hoursDataList = data[day]?.map(el => el.schedule)
	const hoursToShow = hours.filter(hour => !hoursDataList?.includes(hour))
	return { hoursToShow }
}
