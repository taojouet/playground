import Presentation from '../../components/Presentation';

describe('<Presentation />', () => {
    it('should render and display expected content', () => {
        // Mount the React component for the Header component
        cy.mount(<Presentation />)

        // The new page should contain a title with "Tao Jouet | My Playground"
        cy.get('span').contains('Welcome to my playground!')
    })
})