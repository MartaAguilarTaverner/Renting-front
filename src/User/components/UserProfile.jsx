import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Chips } from 'primereact/chips';

const InnerProfile = () => {
    const [values1, setValues1] = useState([]);
    const [values2] = ([]);
    const [values3, setValues3] = useState([]);
    const [values4] = ([]);

    const customChip = (item) => {
        return (
            <div>
                <span>{item} - () </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        )};
    return (
        <div>
            <div className="card p-fluid">
                <h5>Name</h5>
                <Chips value={values1} onChange={(e) => setValues1(e.value)} />

                <h5>Email</h5>
                <Chips value={values2} />

                <h5>Birthday</h5>
                <Chips value={values3} onChange={(e) => setValues3(e.value)} max={5} itemTemplate={customChip}></Chips>

                <h5>Supscription Plan</h5>
                <Chips value={values4} />
            </div>
        </div>
    )
};

    const UserProfile = () => {
        const header = (
            <div>
                <Button label="Edit Profile" icon="pi pi-check" />
            </div>
        );

        const body= (
            InnerProfile(),
        );

        const footer = (
            <span>
                <Button label="Change" icon="pi pi-check" />
                <Button label="Save" icon="pi pi-check" className="p-button-secondary ml-2" />
            </span>
        );

        return (
            <div>
                <Card title="Advanced Card" subTitle="Subtitle" style={{ width: '25em' }} footer={footer} doby={body} header={header}>
                    <p className="m-0" style={{lineHeight: '1.5'}}></p>
                </Card>
            </div>
        )
    };

    export default UserProfile;
