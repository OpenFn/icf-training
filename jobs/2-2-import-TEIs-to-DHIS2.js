each("mappedPatientsData[*]", state => {
    // state.data will contain values of each iteration
    create('trackedEntityInstances', state.data);

    return state;
});
