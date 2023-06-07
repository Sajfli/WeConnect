import propTypes from 'prop-types'

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>
}

RootProvider.propTypes = {
    children: propTypes.node.isRequired,
}

export default RootProvider
