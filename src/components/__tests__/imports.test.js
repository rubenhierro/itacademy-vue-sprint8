import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'

describe('import vue components', () => {
  test('normal imports as expected', async() => {
    const cmp = await import('../MenuComponent.vue')
    expect(cmp).toBeDefined()
  })

  test('template string imports as expected', async() => {
    const cmp = await import(`../MenuLoginComponent.vue`)
    expect(cmp).toBeDefined()
  })

  test('normal imports as expected', async() => {
    const cmp = await import('../Observer.vue')
    expect(cmp).toBeDefined()
  })

  test('normal imports as expected', async() => {
    const cmp = await import('../PilotsComponent.vue')
    expect(cmp).toBeDefined()
  })
})