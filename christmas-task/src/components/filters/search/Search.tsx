import React from 'react';

type Props = {
    search: {
        value: string;
        setValue: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default function Search({ search }: Props) {
    const handleChange = ({ target }: { target: HTMLInputElement }) => {
        search.setValue(target.value);
    };

    return (
        <input
            className="search"
            type="search"
            placeholder="Search for..."
            value={search.value}
            onChange={handleChange}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            autoComplete="false"
        />
    );
}
