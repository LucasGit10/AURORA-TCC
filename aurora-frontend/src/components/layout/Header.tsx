'use client';

import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  Avatar,
  IconButton,
  Breadcrumbs,
  Link
} from '@mui/material';
import { 
  Menu,
  Notifications,
  Person,
  Home
} from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';

interface HeaderProps {
  onMenuClick?: () => void;
  sidebarCollapsed?: boolean;
}

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: ElementType;
}

export const Header = ({ onMenuClick, sidebarCollapsed = false }: HeaderProps) => {
  const pathname = usePathname();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(path => path);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/', icon: Home }];
    
    let currentPath = '';
    paths.forEach(path => {
      currentPath += `/${path}`;
      breadcrumbs.push({
        label: path.charAt(0).toUpperCase() + path.slice(1),
        href: currentPath,
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <AppBar 
      position="fixed" 
      elevation={1} 
      sx={{ 
        backgroundColor: 'white', 
        color: 'text.primary',
        width: { 
          xs: '100%',
          md: `calc(100% - ${sidebarCollapsed ? 72 : 280}px)`
        },
        ml: { md: sidebarCollapsed ? '72px' : '280px' },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1100,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={onMenuClick}
          sx={{ 
            mr: 2, 
            display: { md: 'none' },
            '&:hover': {
              bgcolor: 'primary.50',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <Menu />
        </IconButton>

        <Box sx={{ flexGrow: 1 }}>
          <Breadcrumbs aria-label="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => {
              const isLast = index === breadcrumbs.length - 1;
              const IconComponent = breadcrumb.icon;
              
              return (
                <Link
                  key={breadcrumb.href}
                  href={breadcrumb.href}
                  underline={isLast ? 'none' : 'hover'}
                  color={isLast ? 'text.primary' : 'text.secondary'}
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    fontSize: '0.875rem',
                    fontWeight: isLast ? 600 : 400,
                    transition: 'color 0.2s ease',
                  }}
                >
                  {IconComponent && <IconComponent sx={{ mr: 0.5, fontSize: '1rem' }} />}
                  {breadcrumb.label}
                </Link>
              );
            })}
          </Breadcrumbs>
          
          <Typography 
            variant="h6" 
            fontWeight="600" 
            sx={{ 
              mt: 0.5,
              background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {breadcrumbs[breadcrumbs.length - 1]?.label}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <IconButton 
            color="inherit"
            sx={{
              '&:hover': {
                bgcolor: 'primary.50',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <Notifications />
          </IconButton>
          
          <Box 
            display="flex" 
            alignItems="center" 
            gap={2} 
            sx={{ 
              ml: 2,
              p: 1,
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'grey.50',
              },
              transition: 'all 0.2s ease',
            }}
          >
            <Avatar 
              sx={{ 
                width: 40, 
                height: 40, 
                bgcolor: 'primary.main',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <Person />
            </Avatar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="subtitle2" fontWeight="600">
                Dr. João Médico
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Cardiologista
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};