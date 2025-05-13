const loadProfile = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Profile loaded.")
        }, 2000);
    });
}

const loadDashboard = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Dashboard loaded.")
        });
    });
}

// VERSION 1:
const runBothPromises = async () => {
    try {
        console.time("loadTimeOne");
        const profileGrabber = await loadProfile();
        const dashboardGrabber = await loadDashboard();
        console.timeEnd("loadTimeOne")
        console.log(profileGrabber, dashboardGrabber);
    } catch (error) {
        console.error(error);
    }
}

runBothPromises();


// Version 2:
const runBothPromisesV2 = async () => {
    try {
        console.time("loadTimeTwo");
        const [profile, dashboard] = await Promise.all([
            loadProfile(),
            loadDashboard()
        ]);
        console.timeEnd("loadTimeTwo");
        console.log(profile, dashboard);
    } catch (error) {
        console.error(error);
    }
}

runBothPromisesV2();