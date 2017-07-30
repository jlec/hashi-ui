import React from "react"
import PropTypes from "prop-types"

const ConstraintRow = ({ constraint }) => {
  // unique case as it does not expose any LTarget or RTarget
  if (constraint.Operand === "distinct_hosts") {
    return (
      <tr>
        <td colSpan={3}>
          <code>Distinct Hosts</code>
        </td>
      </tr>
    )
  }

  return (
    <tr>
      <td>
        <code>
          {constraint.LTarget}
        </code>
      </td>
      <td>
        <code>
          {constraint.Operand}
        </code>
      </td>
      <td>
        <code>
          {constraint.RTarget}
        </code>
      </td>
    </tr>
  )
}

ConstraintRow.defaultProps = {
  constraint: {}
}

ConstraintRow.propTypes = {
  constraint: PropTypes.object.isRequired
}

export default ConstraintRow
