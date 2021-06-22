import React from 'react';
import {Text, ScrollView} from 'react-native';
import styles from './filterlist.style';
import Button from '../../../../components/Button';
import {colors} from '../../../../themes';
import Categories from '../../../../enum/Categories';

interface Props {
  handleFilter: (category: string) => void;
  categories: {
    favorites: boolean;
    hobby: boolean;
    blog: boolean;
    school: boolean;
  };
}

const FilterList = ({handleFilter, categories}: Props) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.categories}
      showsHorizontalScrollIndicator={false}>
      <Button onPress={() => handleFilter(Categories.FAVORITES)}>
        <Text
          style={[
            styles.category,
            categories.favorites && {color: colors.lightPurple},
          ]}>
          Favorites
        </Text>
      </Button>
      <Button onPress={() => handleFilter(Categories.HOBBY)}>
        <Text
          style={[
            styles.category,
            categories.hobby && {color: colors.lightPurple},
          ]}>
          Hobby project
        </Text>
      </Button>
      <Button onPress={() => handleFilter(Categories.BLOG)}>
        <Text
          style={[
            styles.category,
            categories.blog && {color: colors.lightPurple},
          ]}>
          Blog
        </Text>
      </Button>
      <Button onPress={() => handleFilter(Categories.SCHOOL)}>
        <Text
          style={[
            styles.category,
            categories.school && {color: colors.lightPurple},
          ]}>
          School
        </Text>
      </Button>
    </ScrollView>
  );
};

export default FilterList;
