export default function formatDate(number){

    const date = new Date(number);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    return formattedDate;
}