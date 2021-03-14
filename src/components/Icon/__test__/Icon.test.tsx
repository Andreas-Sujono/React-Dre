import React from 'react';
import { render } from '@testing-library/react';
import * as Icon from '..';

it('Should render all icon successfully', async () => {
  render(<Icon.CopyIcon />);
  render(<Icon.SimpleCopyIcon />);

  render(<Icon.UpChevronIcon />);
  render(<Icon.DownChevronIcon />);
  render(<Icon.LeftChevronIcon />);
  render(<Icon.RightChevronIcon />);

  render(<Icon.UpArrowIcon />);
  render(<Icon.DownArrowIcon />);
  render(<Icon.LeftArrowIcon />);
  render(<Icon.RightArrowIcon />);

  render(<Icon.ArrowDropdownUpIcon />);
  render(<Icon.ArrowDropdownDownIcon />);
  render(<Icon.ArrowDropdownLeftIcon />);
  render(<Icon.ArrowDropdownRightIcon />);

  render(<Icon.DotsVerticalIcon />);
  render(<Icon.DotsHorizontalIcon />);

  render(<Icon.CloseIcon />);
  render(<Icon.CloseCircleIcon />);

  render(<Icon.OutlinedInstagramIcon />);
  render(<Icon.ColoredInstagramIcon />);
  render(<Icon.OutlinedTwitterIcon />);
  render(<Icon.ColoredTwitterIcon />);

  render(<Icon.HamburgerIcon />);
  render(<Icon.OutlinedUser />);
  render(<Icon.UserIcon />);
  render(<Icon.CalenderIcon />);
  render(<Icon.TimeIcon />);
  render(<Icon.SettingIcon />);
  render(<Icon.LocationIcon />);
  render(<Icon.SearchIcon />);

  render(<Icon.HorizontalSendIcon />);
  render(<Icon.TiltedSendIcon />);

  render(<Icon.ShowPasswordIcon />);
  render(<Icon.HidePasswordIcon />);

  render(<Icon.DesktopIcon />);
  render(<Icon.MobileIcon />);
});
