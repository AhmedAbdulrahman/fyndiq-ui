import React from 'react'
import { shallow } from 'enzyme'
import Button from 'fyndiq-component-button'
import Modal, { ModalButton } from './'

describe('ModalButton Component', () => {
  it('should display a button by default', () => {
    expect(shallow(<ModalButton>Content</ModalButton>)).toMatchSnapshot()
  })

  it('should have a custom button', () => {
    expect(
      shallow(
        <ModalButton button={<Button type="primary">Button</Button>} />,
      ).find(Button),
    ).toMatchSnapshot()
  })

  it('should handle Modal children as a prop', () => {
    expect(
      shallow(
        <ModalButton>
          <Modal overlayClassName="overlayClassName">Content</Modal>
        </ModalButton>,
      ).find(Modal),
    ).toMatchSnapshot()
  })

  it('should open the modal when clicking on the button', () => {
    const Component = shallow(<ModalButton>Content</ModalButton>)
    Component.find(Button).simulate('click')
    Component.update()
    expect(Component.find(Modal).prop('open')).toBe(true)
  })

  it('should close the modal when the modal closes itself', () => {
    const Component = shallow(
      <ModalButton>
        <Modal open>Content</Modal>
      </ModalButton>,
    )
    Component.find(Modal).prop('onClose')()
    Component.update()
    expect(Component.find(Modal).prop('open')).toBe(false)
  })
})
