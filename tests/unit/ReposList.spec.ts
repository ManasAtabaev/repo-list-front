import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ReposList from '@/components/ReposList.vue';
import { setActivePinia, createPinia } from 'pinia';

describe('ReposList.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders repos list when passed', () => {
    const data = [
      {
        id: 38674532,
        node_id: 'MDEwOlJlcG9zaXRvcnkzODY3NDUzMg==',
        name: 'Tetris',
        full_name: 'sandywalker/Tetris',
        html_url: 'https://github.com/sandywalker/Tetris',
        description: 'Html5 Tetris game',
        owner: {
          login: 'sandywalker',
          id: 8475219,
          html_url: 'https://github.com/sandywalker',
        },
        size: 166,
      },
    ];
    const wrapper = shallowMount(ReposList, {
      props: { data },
    });
    expect(wrapper.text()).to.include(data[0].full_name);
  });
});
