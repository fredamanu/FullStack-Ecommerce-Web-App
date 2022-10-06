import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { ProductDocument } from '../../types'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

type Props = {
  product: Partial<ProductDocument>
}

const ProductDetailTabs: React.FC<Props> = ({
  product: { benefits, suggestedUse, ingredients, disclosure },
}) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Benefits" {...a11yProps(0)} />
          <Tab label="Suggested Use" {...a11yProps(1)} />
          <Tab label="Ingredients" {...a11yProps(2)} />
          <Tab label="Disclosure" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p className="tab-panel-p">{benefits}</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="tab-panel-p">{suggestedUse}</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="tab-panel-p">{ingredients}</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p className="tab-panel-p">{disclosure}</p>
      </TabPanel>
    </Box>
  )
}

export default ProductDetailTabs
