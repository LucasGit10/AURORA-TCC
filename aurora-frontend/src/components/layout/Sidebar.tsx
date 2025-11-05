'use client';

import { 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Typography,
  Divider,
  Tooltip,
  Collapse,
  useTheme 
} from '@mui/material';
import { 
  Dashboard, 
  People, 
  CalendarToday, 
  Description,
  LocalHospital,
  Settings,
  ExitToApp,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import { ElementType } from 'react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

interface MenuItem {
  text: string;
  icon: ElementType;
  href: string;
}

const menuItems: MenuItem[] = [
  { text: 'Dashboard', icon: Dashboard, href: '/dashboard' },
  { text: 'Pacientes', icon: People, href: '/patients' },
  { text: 'Consultas', icon: CalendarToday, href: '/appointments' },
  { text: 'Laudos', icon: Description, href: '/reports' },
  { text: 'Chat IA', icon: LocalHospital, href: '/medical-chat' },
];

const bottomMenuItems: MenuItem[] = [
  { text: 'Configurações', icon: Settings, href: '/settings' },
  { text: 'Sair', icon: ExitToApp, href: '/logout' },
];

export const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const pathname = usePathname();
  const theme = useTheme();

  const renderMenuItem = (item: MenuItem, isBottom: boolean = false) => {
    const isActive = !isBottom && (pathname === item.href);
    const IconComponent = item.icon;
    const defaultColor = isBottom ? theme.palette.text.secondary : theme.palette.text.primary;

    return (
      <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
        <Tooltip title={isCollapsed ? item.text : ''} placement="right" disableHoverListener={!isCollapsed}>
          <ListItemButton
            href={item.href}
            sx={{
              borderRadius: 2,
              py: 1.25,
              px: isCollapsed ? 2 : 2.5,
              bgcolor: isActive ? theme.palette.primary.light : 'transparent',
              color: isActive ? theme.palette.primary.main : defaultColor,
              border: isActive ? `1px solid ${theme.palette.primary.main}` : 'none',
              minHeight: 44,
              justifyContent: isCollapsed ? 'center' : 'flex-start',
              '&:hover': {
                bgcolor: isActive ? theme.palette.primary.light : theme.palette.grey[100],
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isCollapsed ? 0 : 2,
                justifyContent: 'center',
                color: isActive ? theme.palette.primary.dark : theme.palette.text.secondary,
                transition: 'color 0.2s ease-in-out',
              }}
            >
              <IconComponent />
            </ListItemIcon>
            
            <Collapse in={!isCollapsed} orientation="horizontal" timeout={300}>
              <ListItemText 
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: isActive ? 600 : 400,
                  noWrap: true,
                  fontSize: '0.95rem',
                }}
              />
            </Collapse>
          </ListItemButton>
        </Tooltip>
      </ListItem>
    );
  };

  return (
    <Box
      sx={{
        width: isCollapsed ? 72 : 280,
        bgcolor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: theme.zIndex.drawer,
        boxShadow: theme.shadows[4],
        transition: theme.transitions.create(['width', 'box-shadow'], {
          duration: theme.transitions.duration.standard,
        }),
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      
      <Box sx={{ p: isCollapsed ? 1.5 : 3, pb: isCollapsed ? 1.5 : 2, pt: 2, display: 'flex', alignItems: 'center' }}>
        <Collapse in={!isCollapsed} orientation="horizontal">
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: theme.palette.primary.main,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette.common.white,
                fontWeight: 'bold',
                fontSize: '1.25rem',
                flexShrink: 0,
              }}
            >
              H
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography 
                variant="h6" 
                fontWeight={700}
                color="text.primary"
                noWrap
              >
                Hospital Aurora
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                Sistema Médico
              </Typography>
            </Box>
          </Box>
        </Collapse>

        <Collapse in={isCollapsed} orientation="horizontal">
          <Box
            sx={{
              width: 40,
              height: 40,
              bgcolor: theme.palette.primary.main,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme.palette.common.white,
              fontWeight: 'bold',
              fontSize: '1.25rem',
              mx: 'auto',
            }}
          >
            H
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ mx: 2 }} />

      <Box sx={{ flex: 1, py: 2, overflowX: 'hidden' }}>
        <List sx={{ px: 1 }}>
          {menuItems.map(item => renderMenuItem(item))}
        </List>
      </Box>

      <Divider sx={{ mx: 2 }} />

      <Box sx={{ p: 2, overflowX: 'hidden' }}>
        <List sx={{ px: 1 }}>
          {bottomMenuItems.map(item => renderMenuItem(item, true))}
        </List>
      </Box>

      <Box 
        onClick={onToggle} 
        sx={{ 
          p: isCollapsed ? 1.5 : 2,
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.grey[50],
          cursor: 'pointer',
          color: theme.palette.text.secondary,
          '&:hover': {
            bgcolor: theme.palette.grey[100],
            color: theme.palette.primary.main,
          },
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Tooltip 
          title={isCollapsed ? 'Expandir Menu' : 'Ocultar Menu'} 
          placement={isCollapsed ? 'right' : 'top'}
        >
          <Box 
            component="span" 
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {isCollapsed ? (
              <ChevronRight sx={{ fontSize: 24 }} />
            ) : (
              <>
                <Typography variant="body2" fontWeight={600} noWrap>
                  Encolher
                </Typography>
                <ChevronLeft sx={{ fontSize: 24, ml: 0.5 }} />
              </>
            )}
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};