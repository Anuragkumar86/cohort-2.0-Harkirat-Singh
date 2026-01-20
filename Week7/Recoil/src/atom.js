import { atom, selector } from "recoil";

export const NeworkAtom = atom({
    key : "NeworkAtom",
    default : 103
})

export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
})
export const jobsAtom = atom({
    key : "jobsAtom",
    default : 0
})
export const notificationAtom = atom({
    key : "notificationAtom",
    default : 14
})

export const totalNotification = selector({
    key: "totalNotification",
    get: ({get}) =>{
        const NeworkCount = get(NeworkAtom);
        const messagingCount = get(messagingAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationAtom)

        return NeworkCount + messagingCount + jobsCount + notificationCount;
    }
})