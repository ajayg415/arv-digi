import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {List, Divider} from 'react-native-paper';
import axios from 'axios';

import Colors from '../../constants/Colors';
import data from '../../server/db.json';

interface Faqs {
  title: string;
  description: string;
}

const CollapsableView = () => {
  const [faqs, setFaqs] = React.useState<Faqs[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await axios(`http://localhost:5000/faqs/`);
        setFaqs(await data);
      } catch (e) {
        setFaqs(data.faqs);
      }
    })();
  }, []);

  return (
    <List.Section title="Accordions">
      <Divider style={styles.divider} />
      {faqs.map((faq: Faqs) => {
        return (
          <>
            <List.Accordion
              title={faq.title}
              style={styles.accordion}
              titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              <List.Item
                title=""
                descriptionStyle={{color: Colors.white}}
                description={faq.description}
                style={{
                  paddingVertical: 0,
                }}
              />
            </List.Accordion>
            <Divider style={styles.divider} />
          </>
        );
      })}
    </List.Section>
  );
};

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: Colors.background,
  },
  divider: {
    borderTopWidth: 1,
    borderColor: Colors.primary,
    marginHorizontal: 10,
  },
});

export default CollapsableView;
