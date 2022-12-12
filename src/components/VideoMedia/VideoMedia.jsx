import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

const FieldVideoMedia = () => {
    return (
        <div>
            <div className="card">
                <h3>Info</h3>
                <Fieldset legend="nameMovie">
                    <div><h2>NAME</h2></div>
                    <div><h5>Description of the movie/serie</h5></div>
                    <div><h5>Year</h5> <h5>Director</h5> <h5>Genre</h5> <h5>MinAge</h5> <h5>Rating</h5></div>
                </Fieldset>
                <Card title="" className="video-view">
                    <Button/>
                    <ProgressSpinner />
                </Card>
            </div>
        </div>
    )
}
    
export default FieldVideoMedia;

