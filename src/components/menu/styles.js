import { Menu,} from 'antd'
import styled from 'styled-components'

export const MenuStyled = styled(Menu)`
  &.ant-menu-light {
    background: #1E4164 !important;

    .ant-menu-submenu-selected {
        color: grey !important;
        border-color: none;
      }

    li {
      color: white;

      &:hover {
        color: green;
      }
    }
  }
`