type TTreeSettings = {
    tree: {
        name: string;
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
    background: {
        name: string;
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
    fairyLights: {
        name: string;
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
    snow: {
        name: string;
        value: boolean;
        setValue: React.Dispatch<React.SetStateAction<boolean>>;
    };
    music: {
        name: string;
        value: boolean;
        setValue: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

type ITreeSettings = {
    [key: string]: {
        name: string;
        value: string | boolean;
        setValue: React.Dispatch<React.SetStateAction<string>> | React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export default TTreeSettings;
export { ITreeSettings };
