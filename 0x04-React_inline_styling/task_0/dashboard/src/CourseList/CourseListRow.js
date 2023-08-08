import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let element;
    const rowStyles = { backgroundColor: "#f5f5f5ab" };
    const headerRowStyles = { backgroundColor: "#deb5b545" };

    if (isHeader === true) {
        if (textSecondCell === null) {
            return <tr><th colSpan="2">{textFirstCell}</th></tr>;
        } else {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else if (isHeader === false) {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }

    let isHeaderStyle;

    if (isHeader) isHeaderStyle = headerRowStyles;
    else isHeaderStyle = rowStyles;

    return <tr style={isHeaderStyle}>{element}</tr>;
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;