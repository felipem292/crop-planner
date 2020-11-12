npm install
npm run start
event.plannedEvent === planned && (
<tr key={event._id}>
<td>
{" "}
<Link to={`./event/${event._id}`}> {event.nameEvent}</Link>
</td>
<td>{event.dateEvent} </td>
</tr>
)
