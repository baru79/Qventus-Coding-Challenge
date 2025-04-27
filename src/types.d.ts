type TpasswordReq = {
    text: string;
    validate: (password: string) => boolean;
};
export type TpasswordReqs = TpasswordReq[];
