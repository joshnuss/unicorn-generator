import { render } from '@testing-library/svelte'
import App from './App'
import {organizations, industries} from './data'

test('company is in company list', () => {
    const { container, getByTestId } = render(App)
    const h2 = getByTestId("company")
    const company = h2.textContent
    let names = []
    organizations.forEach(organization => {
        names.push(organization.name)
    })
    expect(names).toContain(company)
})

test('industry is in industry list', () => {
    const { container, getByTestId } = render(App)
    const h2 = getByTestId("industry")
    const industry = h2.textContent
    let names = []
    organizations.forEach(organization => {
        names.push(organization.name)
    })
    expect(Object.keys(industries)).toContain(industry)
})

test('industry is not in company industry list', () => {
    for(var run=0; run<100; run++){
        const { component, getByTestId, unmount, debug } = render(App, {  target: document.body, })
        const h2c = getByTestId("company")
        const company = h2c.textContent
        let organization = organizations.find(o=>o.name == company)
        const h2i = getByTestId("industry")
        const industry = h2i.textContent
        expect(organization.industries).not.toContain(industry)
        unmount()
    }
})
