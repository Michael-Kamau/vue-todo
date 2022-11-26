import {assert, describe, it, expect, beforeEach} from 'vitest'
import {render, screen} from "@testing-library/vue";
import { mount } from '@vue/test-utils'

import App from "../../src/App.vue";
import store from "../../src/store/index.js";


describe('suite', () => {
    let wrapper

    beforeEach(() => {
        wrapper = render(App, {
            global: {
                plugins: [store]
            }
        });
    })

    it("snap shot matches", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('A todo item can be added to the list', async () => {
        const wrapper = mount(App,{
            global: {
                plugins: [store]
            }
        })
        const todoInput = wrapper.find('#todoInput')

        todoInput.setValue('New todo item');
        await todoInput.trigger('keyup.enter');

        const itemsText = wrapper.find('#itemsLeft')

        expect(todoInput.exists()).toBe(true)
        expect(itemsText.text()).toBe('1 items left')
        expect(todoInput.text()).toBe('')

    })

    it('A todo item can be marked as complete', async () => {
        const wrapper = mount(App,{
            global: {
                plugins: [store]
            }
        })
        const todoItem = wrapper.find('.item')
        const itemsText = wrapper.find('#itemsLeft')
        const completeButton = wrapper.find('#completeButton')


        expect(todoItem.exists()).toBe(true)
        expect(completeButton.exists()).toBe(true)
        expect(todoItem.text()).toBe('New todo item')

        await completeButton.trigger('click')


        expect(itemsText.text()).toBe('0 items left')

    })


    it('A user can clear all completed items', async () => {
        const wrapper = mount(App,{
            global: {
                plugins: [store]
            }
        })
        const clearComplete = wrapper.find('#clearComplete')


        expect(clearComplete.exists()).toBe(true)
        await clearComplete.trigger('click')

        const todoItem = wrapper.find('.item')
        expect(todoItem.exists()).toBe(false)


    })



})
