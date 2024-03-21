export default function EventTable({events}) {
    return (
        <table id="event-table">
            <thead>
                <th>STT</th>
                <th>Tên sự kiện</th>
                <th>Người phụ trách</th>
                <th>Thời gian diễn ra</th>
                <th>Tình trạng giải ngân</th>
                <th>Status</th>
            </thead>

            <tbody>
                {events.map((event, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{event.name}</td>
                            <td>{event.lead}</td>
                            <td>{event.time}</td>
                            <td>{event.budgetState}</td>
                            <td>{event.status}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}