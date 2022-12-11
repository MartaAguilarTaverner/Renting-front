import React, { useState, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";

import "./TableCardMedia.css";

const renderListItem = (data) => (
    <div className="col-12">
        <div className="media-list-item media-card">
            <img src={data.imgURL} alt={data.name} className="mediaimg" />
            <div className="media-list-detail">
                <Rating value={data.rating} readOnly cancel={false}></Rating>
            </div>
            <div className="media-list-action">
                <Button icon="pi pi-search" label="Add to Cart"></Button>
            </div>
        </div>
    </div>
);

const renderGridItem = (data) => (
    <div className="col-12 md:col-4">
        <div className="media-grid-item card">
            <div className="media-grid-item-content media-card">
                <img src={data.imgURL} alt={data.name} className="mediaimg" />
                <Rating
                    value={data.rating}
                    readOnly
                    cancel={false}
                    stars={10}
                />
            </div>
            <div className="media-grid-item-bottom media-button">
                <Button
                    icon="pi pi-search"
                    className="media-button"
                    label="Info"
                ></Button>
            </div>
        </div>
    </div>
);

const TableCardMedia = ({ mediaList }) => {
    const [layout, setLayout] = useState("grid");
    const [sortOrder, setSortOrder] = useState(null);
    const [sortField, setSortField] = useState(null);
    const [loading, setLoading] = useState(true);

    const itemTemplate = (media, layout) => {
        if (!media) {
            return;
        }

        let result = renderGridItem(media);

        if (layout === "list") {
            result = renderListItem(media);
        }

        return result;
    };

    const renderHeader = () => {
        return (
            <div className="grid grid-nogutter header-mediatable">
                <div className="col-6" style={{ textAlign: "right" }}>
                    <DataViewLayoutOptions
                        layout={layout}
                        onChange={(e) => setLayout(e.value)}
                    />
                </div>
            </div>
        );
    };

    useEffect(() => {
        if (mediaList.length > 0) {
            setLoading(false);
        }
    }, [mediaList]);

    return (
        <div className="table-card-media-container">
            <DataView
                className="view"
                value={mediaList}
                layout={layout}
                header={renderHeader()}
                itemTemplate={itemTemplate}
                paginator
                rows={9}
                sortOrder={sortOrder}
                sortField={sortField}
                loading={loading}
            />
        </div>
    );
};

export default TableCardMedia;
