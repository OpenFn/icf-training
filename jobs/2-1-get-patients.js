// Extract data from an source app API using HTTP GET request
get('https://jsonplaceholder.typicode.com/users');

// Initialize a mapping variable

// Iterate over the extracted EMR data and map data to new data elements

// User by userId
fn(state => {
    const users = state.data;

    //   Collect user by userId
    //   r is an accumulator, a is a currentValue
    const patientsRecord = [];

    const mappedPatientsData = users.reduce((r, a) => {

        //Initialize TrackedEntiryRecord and map attributes
        const trackedEntity = {};

        // Set static ID values of DHIS2 trackedEntityInstances(Puting such information in state.json would be good practice!)
        trackedEntity["orgUnit"] = "Val1-ID";
        trackedEntity["trackedEntityTipe"] = "Val1-ID";

        // This is the dynamic part of the trackedEntityInstances record
        trackedEntity["attributes"] = [];

        // Initialize array entries for each Tracked entity attributes(Static attribute ID and dynamic value extracted from patient data)
        // This is were we do the attribute mapping
        // In this demonstration only Name and Email are used
        var trackedEntityNameAttributeValue =
            { attribute: "NAME-ATTR-ID", value: a.name };
        var trackedEntityEmailAttributeValue =
            { attribute: "EMAIL-ATTR-ID", value: a.email };

        trackedEntity["attributes"].push(trackedEntityNameAttributeValue);
        trackedEntity["attributes"].push(trackedEntityEmailAttributeValue);


        patientsRecord.push(trackedEntity);

        return patientsRecord;
    }, {});

    return { ...state, mappedPatientsData };
});
