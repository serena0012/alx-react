import React from "react";
import PropTypes from "prop-types";

const rowStyle = {
    backgroundColor: "#f5f5f5ab",
};

const headerRowStyle = {
    backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const rowStyling = isHeader ? headerRowStyle : rowStyle;

    if (isHeader === true) {
        if (textSecondCell === null) {
            return <tr style={rowStyling}><th colSpan="2">{textFirstCell}</th></tr>;
        } else {
            return (
                <tr style={rowStyling}>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            );
        }
    } else if (isHeader === false) {
        return (
            <tr style={rowStyling}>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        );
    }
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
