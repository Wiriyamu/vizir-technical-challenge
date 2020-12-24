import FaleMais from '@/views/FaleMais.vue'
import { mount } from '@vue/test-utils'

window.alert = jest.fn()
window.console.warn = jest.fn()

describe('FaleMais.vue', () => {
  it('should render the defalut state correctly', () => {
    const wrapper = mount(FaleMais)

    expect(wrapper.vm.state.call).toBe(null)
    expect(wrapper.vm.state.minutes).toBe(null)
    expect(wrapper.vm.state.plan).toBe(null)
    expect(wrapper.vm.state.withTalkMore).toBe('R$ 0,00')
    expect(wrapper.vm.state.withoutTalkMore).toBe('R$ 0,00')
  })

  it('should show a alert if any form field are empty', async () => {
    const wrapper = mount(FaleMais)

    await wrapper.get('[data-test="call-cost"]').trigger('click')

    expect(window.alert.mock.calls[0][0]).toEqual(
      'Deixou algum campo vazio? Por favor, preencha-o corretamente!'
    )
  })

  it('Should clear the fields form', async () => {
    const wrapper = mount(FaleMais)

    expect(wrapper.vm.state.minutes).toBe(null)
    expect(wrapper.vm.state.plan).toBe(null)

    await wrapper.get('[data-test="call"]').setValue('1.90')
    await wrapper.get('[data-test="input-minutes"]').setValue(20)
    await wrapper.get('[data-test="talk-more-30"]').trigger('click')
    await wrapper.get('[data-test="clear-selection"]').trigger('click')

    expect(wrapper.vm.state.call).toBe(null)
    expect(wrapper.vm.state.minutes).toBe(null)
    expect(wrapper.vm.state.plan).toBe(null)
  })

  it('should calculate the cost of the call', async () => {
    const wrapper = mount(FaleMais)

    expect(wrapper.vm.state.withTalkMore).toBe('R$ 0,00')
    expect(wrapper.vm.state.withoutTalkMore).toBe('R$ 0,00')

    await wrapper.get('[data-test="call"]').setValue('1.90')
    await wrapper.get('[data-test="input-minutes"]').setValue(20)
    await wrapper.get('[data-test="talk-more-30"]').trigger('click')
    await wrapper.get('[data-test="call-cost"]').trigger('click')

    expect(wrapper.vm.state.withTalkMore).toBe('R$ 0,00')
    expect(wrapper.vm.state.withoutTalkMore).toBe('R$ 38,00')
  })

  it('should clear the fields withMoreTalk and withoutMoreTalk in the cost box', async () => {
    const wrapper = mount(FaleMais)

    expect(wrapper.vm.state.withTalkMore).toBe('R$ 0,00')
    expect(wrapper.vm.state.withoutTalkMore).toBe('R$ 0,00')

    await wrapper.get('[data-test="call"]').setValue('1.90')
    await wrapper.get('[data-test="input-minutes"]').setValue(20)
    await wrapper.get('[data-test="talk-more-30"]').trigger('click')
    await wrapper.get('[data-test="call-cost"]').trigger('click')

    expect(wrapper.vm.state.withTalkMore).toBe('R$ 0,00')
    expect(wrapper.vm.state.withoutTalkMore).toBe('R$ 38,00')

    await wrapper.get('[data-test="clear-form-price"]').trigger('click')

    expect(wrapper.vm.state.withTalkMore).toBe('R$ 0,00')
    expect(wrapper.vm.state.withoutTalkMore).toBe('R$ 0,00')
  })
})
