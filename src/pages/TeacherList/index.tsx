import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import TeacherItem from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'

import styles from './styles'

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title='Proffys diponíveis' 
        headerRight={(
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name='filter' size={20} color='#fff' />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor='#c1bccc'
              style={styles.input}
              placeholder='Qual a matéria?'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Qual o dia?'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor='#c1bccc'
                  style={styles.input}
                  placeholder='Qual horário?'
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default TeacherList