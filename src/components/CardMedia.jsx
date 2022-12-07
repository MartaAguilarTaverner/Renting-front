
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const CardMedia = () => {


    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <div className="flex justify-content-center">
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
        </div>
    );

    return (
        <div classNAme="flex justify-content-center" >
            <Card title="Movie" classNAme="flex justify-content-center" style={{ width: '25em' }} footer={footer} header={header}>
            </Card>
        </div>
    )
}

export default CardMedia;