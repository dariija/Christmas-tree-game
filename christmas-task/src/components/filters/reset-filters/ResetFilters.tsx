import React from "react";
import T_Filters from "../../../types/T_Filters";
import Button from "../../button/Button"

type Props = {
    filters: T_Filters
}

export default function ResetFilters({filters}: Props) {

    const onResetFilters = () => {
        filters.search.setValue('');
        filters.sorting.setValue('-');
        filters.shapes.setValue({});
        filters.colours.setValue({});
        filters.sizes.setValue({});
        filters.favourite.setValue({});
        filters.quantity.setValue([filters.quantity.min, filters.quantity.max])
        filters.years.setValue([filters.years.min, filters.years.max])
    };

    const onResetSettings = () => {
        onResetFilters();
        filters.select.setValue([])
        localStorage.clear();
    };

    return (
        <div className="buttons-filter">
            <Button className="button button_reset-filter" text="Reset filters" handleChange={onResetFilters}/>
            <Button className="button button_reset-options" text="Reset all settings" handleChange={onResetSettings}/>
        </div>
    )
}