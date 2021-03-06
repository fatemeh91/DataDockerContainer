print("-- start script here --");
use caMicroscope_Templates;
db.AnnotationTemplate.update(
    { "_id": ObjectId("5789471e80e00235a16436a3") },
    {
        "_id": ObjectId("5789471e80e00235a16436a3"),
        "region": {
            "enum": [
                "Good Segmentation",
                "Clump"
            ],
            "title": "Region:",
            "type": "string"
        },
        "additional_annotation": {
            "title": "Additional annotation for the region: ",
            "type": "textarea"
        },
        "additional_notes": {
            "title": "Additional notes: ",
            "type": "textarea"
        },
        "secret": {
            "title": "Secret: ",
            "type": "password"
        }
    },
    { "upsert": true }
);
print("-- end of  script  --");
