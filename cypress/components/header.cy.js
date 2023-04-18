import Header from '../../components/global/Header';

describe('<Header />', () => {
    it('should render and display expected content', () => {
        // Mount the React component for the Header component
        cy.mount(<Header />)

        // The new page should contain a title with "Tao Jouet | My Playground"
        cy.get('title').contains('Tao Jouet | My Playground')
    })
})